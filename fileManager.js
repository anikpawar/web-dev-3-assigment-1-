const fs = require("fs");

const fileName = "sample.txt";

console.log("File Manager Started");

// CREATE FILE
fs.writeFile(fileName, "Hello! This is my Smart Utility Toolkit.", (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("1. File created successfully.");

    // READ FILE
    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("2. File content:", data);

        // UPDATE FILE
        fs.appendFile(fileName, "\nThis line was added later.", (err) => {

            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("3. File updated successfully.");

            // READ UPDATED FILE
            fs.readFile(fileName, "utf8", (err, updatedData) => {

                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }

                console.log("4. Updated content:");
                console.log(updatedData);

                // DELETE FILE
                fs.unlink(fileName, (err) => {

                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("5. File deleted successfully.");
                    console.log("File Manager Finished.");

                });
            });
        });
    });
});