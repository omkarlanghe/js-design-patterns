/**
 * <<<<< Composite pattern >>>>>
 *
 * composite is a structural javascript design pattern that lets you compose objects into tree structures and
 * then work with these structures as if they were individual objects.
 *
 * Example :
 * A file-folder (directory) structure is explained in the below code. Here a directory can have two types of
 * entities, a file or another directory, which can contain files or directories and so on.
 * We have 2 classes - File and Directory. We can add or remove files in the directory and also getFileName, and
 * the display will list all file names inside the directory.
 * 
 */

function File(name) {
    this.name = name;
};

File.prototype.display = function () {
    console.log(this.name);
};

function Directory(name) {
    this.name = name;
    this.files = [];
};

Directory.prototype.add = function (file) {
    this.files.push(file);
};

Directory.prototype.remove = function (file) {
    for (let i = 0, length = this.files.length; i < length; i++) {
        if (this.files[i] == file) {
            this.files.splice(i, 1);
            return true;
        }
    }
    return false;
};

Directory.prototype.getFileName = function (index) {
    return this.files[index].name;
};

Directory.prototype.display = function () {
    console.log(this.name);
    for (let i = 0, length = this.files.length; i < length; i++) {
        console.log("   ", this.getFileName(i));
    }
}

let directory_one = new Directory("Directory One");
let directory_two = new Directory("Directory Two");
let directory_three = new Directory("Directory Three");

let file_one = new File("File One");
let file_two = new File("File Two");
let file_three = new File("File Three");

directory_one.add(file_one);
directory_one.add(file_two);

directory_two.add(file_one);

directory_three.add(file_one);
directory_three.add(file_two);
directory_three.add(file_three);

directory_one.display();
directory_two.display();
directory_three.display();
