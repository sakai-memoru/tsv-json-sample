const config = require('config');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');

//console.log(config);

var createRecord = (filename,columns,delimiter,comment,header) =>{
  let input = fs.readFileSync(filename,'utf-8');
  let startLine = 1 ;
  if(header){
    startLine = 2;
  }
  let records = parse(input,{columns : columns, delimiter : delimiter, comment : comment , from : startLine});
  return records;
}

var outputObj = (i) => {
  let obj = {};
  let records = createRecord(
    config.collections[i].INPUT_FILE_PATH,
    config.collections[i].DELIMITER_STRING,
    config.collections[i].COMMENT_LINE,
    config.collections[i].HEADER_LINE
  );
  obj[config.collections[i].COLLECTION_NAME] = records;
  fs.writeFile(config.collections[i].OUTPUT_FILE_PATH,JSON.stringify(obj,null,'\t'));
}

var main = ()=>{
  i=0;
  outputObj(i);
}

// entry point --------------------
// --------------------------------
main();
