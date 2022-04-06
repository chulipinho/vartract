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

export const getFieldsFrom = async (file) => {
    if(!file) return;

    const string = await getContentFromFile(file);
    const fields = await getContentFields(string);

    return fields;
};
