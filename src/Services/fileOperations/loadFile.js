import JSZip from "jszip";

const DATA_FORMAT_REGEX = /(?<=\[\\)(.*?)(?=\])/g;

export const getContentFromFile = async (file) => {
    const data = await JSZip.loadAsync(file);
    const content = await data.files["word/document.xml"].async("string");

    return content;
};

const getContentFields = (content) => {
    const fields = content.match(DATA_FORMAT_REGEX);
    if (!fields) return;

    const noRepeatFields = fields.filter(
        (value, index, arr) => arr.indexOf(value) === index
    );

    return noRepeatFields;
};

export const getFieldsFrom = async (file) => {
    if (!file) return;

    const string = await getContentFromFile(file);
    const fields = await getContentFields(string);

    return fields;
};
