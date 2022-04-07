import JSZip from "jszip";
import { getContentFromFile } from "./loadFile";

const createNewXmlContent = (originalContent, newData) => {
    let newContent = originalContent;

    Object.entries(newData).forEach((entry) => {
        const key = entry[0];
        const value = entry[1];

        newContent = newContent.replace(`[\\${key}]`, value);
    });

    return newContent;
};

const newZipFile = (originalFile, newContent) => {
  const zip = new JSZip();
  const newFile = originalFile;

  zip.loadAsync(newFile).then(newFile => {
    newFile.file('word/document.xml', newContent);
  });
  
  return zip;
}

export const getNewFile = async (originalFile, newData) => {
  const originalContent = await getContentFromFile(originalFile);
  const newContent = createNewXmlContent(originalContent, newData);

  const newFile = await newZipFile(originalFile, newContent);

  return newFile;
}