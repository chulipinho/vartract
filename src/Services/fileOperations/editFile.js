import JSZip from "jszip";

const DATA_FORMAT_REGEX = /(?<=\[\\)(.*?)(?=\])/g;

const getContentFromFile = async (file) => {
  const data = await JSZip.loadAsync(file);
  const content = await data.files["word/document.xml"].async("string");

  return content;
};

const getContentFields = async (content) => {
  return content.match(DATA_FORMAT_REGEX);
};

const createNewXmlContent = (originalFile, newData) => {
    let newContent = originalFile;
    
  Object.entries(newData).forEach((entry) => {
    const key = entry[0];
    const value = entry[1];
    
    newContent = newContent.replace(`[\\${key}]`, value);
  });
  
  return newContent;
};



export const loadFile = async (file) => {
  const string = await getContentFromFile(file);
  const fields = await getContentFields(string);

  console.log(fields);
};