import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const sourceArgument = process.argv.slice(2).find(arg => !arg.startsWith("--"));
const sourcePath = path.resolve(sourceArgument || "public/university-map.html");
const region = (process.argv.find(arg => arg.startsWith("--region="))?.split("=")[1] || "seoul").toLowerCase();
const source = fs.readFileSync(sourcePath, "utf8");

function extractInitializer(name, open, close) {
  const marker = `const ${name} =`;
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) throw new Error(`Cannot find ${name}`);
  const start = source.indexOf(open, markerIndex + marker.length);
  if (start < 0) throw new Error(`Cannot find initializer for ${name}`);
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === open) depth += 1;
    if (char === close) depth -= 1;
    if (depth === 0) return source.slice(start, index + 1);
  }
  throw new Error(`Unclosed initializer for ${name}`);
}

function readLiteral(name, open, close) {
  return vm.runInNewContext(`(${extractInitializer(name, open, close)})`, Object.create(null));
}

const regionVariables = {
  seoul: "universities",
  gyeonggi: "gyeonggiUniversities",
  incheon: "incheonUniversities",
  gangwon: "gangwonUniversities",
  chungcheong: "chungcheongUniversities",
  gyeongsang: "gyeongsangUniversities",
  jeolla: "jeollaUniversities"
};

const universityVariable = regionVariables[region];
if (!universityVariable) throw new Error(`Unsupported region: ${region}`);

const universities = readLiteral(universityVariable, "[", "]");
const departmentData = readLiteral("departmentData", "{", "}");
const baseName = name => String(name || "").replace(/\([^)]*\)$/, "");
const keyFor = university => departmentData[university.name] ? university.name : baseName(university.name);
const issues = [];
let departmentCount = 0;
const universitySummaries = [];

for (const university of universities) {
  const key = keyFor(university);
  const groups = departmentData[key];
  if (!Array.isArray(groups) || groups.length === 0) {
    issues.push({ type: "missing-or-empty", university: university.name, dataKey: key });
    universitySummaries.push({ university: university.name, dataKey: key, colleges: 0, departments: 0 });
    continue;
  }

  const collegeNames = new Set();
  const departmentNames = new Set();
  for (const group of groups) {
    const college = String(group?.college || "").trim();
    if (!college) issues.push({ type: "missing-college", university: university.name });
    else if (collegeNames.has(college)) issues.push({ type: "duplicate-college", university: university.name, college });
    else collegeNames.add(college);

    if (!Array.isArray(group?.departments) || group.departments.length === 0) {
      issues.push({ type: "empty-departments", university: university.name, college });
      continue;
    }
    for (const rawDepartment of group.departments) {
      const department = String(rawDepartment || "").trim();
      departmentCount += 1;
      if (!department) issues.push({ type: "blank-department", university: university.name, college });
      else if (departmentNames.has(department)) issues.push({ type: "duplicate-department", university: university.name, college, department });
      else departmentNames.add(department);
      if (department !== rawDepartment) issues.push({ type: "department-whitespace", university: university.name, college, department: rawDepartment });
    }
  }
  universitySummaries.push({ university: university.name, dataKey: key, colleges: groups.length, departments: departmentNames.size });
}

const report = {
  source: path.relative(process.cwd(), sourcePath),
  region,
  universities: universities.length,
  departmentEntries: departmentCount,
  universitiesWithData: universities.length - issues.filter(issue => issue.type === "missing-or-empty").length,
  universitySummaries,
  issues
};

console.log(JSON.stringify(report, null, 2));
if (issues.length) process.exitCode = 1;
