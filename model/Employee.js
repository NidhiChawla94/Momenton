/***
 * Employee model class
 */
class Employee {
    constructor(name, id, managerId = undefined) {
        this._name = name;
        this._id = id;
        this._managerId = managerId;
    }

    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get managerId() {
        return this._managerId;
    }
}


exports.Employee= Employee;