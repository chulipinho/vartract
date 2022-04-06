const JSZip = require("jszip");
const fs = require("fs");

(async () => {

    fs.readFile("CONTRATO.docx", function (err, data) {
        if (err) throw err;

        JSZip.loadAsync(data).then(async data => {
            let file = data.files["word/document.xml"];
            
            let content = await file.async("string");
            console.log(content);
            
            fs.writeFile("test.xml", content, () => {});
        });
    });
})()