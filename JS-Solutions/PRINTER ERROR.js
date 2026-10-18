function printerError(s) {
   const errors = s.match(/[n-z]/g);
  const errorCount = errors ? errors.length : 0;
  return `${errorCount}/${s.length}`;
}