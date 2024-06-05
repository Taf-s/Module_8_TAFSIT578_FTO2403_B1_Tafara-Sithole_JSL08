
// 1. Variable to store the singleton instance of the bank branch. "bankBranchInstance"

let bankBranchInstance = null;

// 2. Class called `BankBranch` for managing branch information.
class BankBranch{

// 3. Constructor in the `BankBranch` class

    constructor (branchinfo){
        if(!bankBranchInstance){
            bankBranchInstance = this;
            this.branchinfo = branchinfo;

        }
        return bankBranchInstance;
    }

 // 4. Method to the `BankBranch` class to retrieve branch details.
    getBranchInfo() {
        return this.branchinfo;
    }
}

// 5. Usage section:

const branchA = new BankBranch ('Branch A');
const branchB = new BankBranch ('Branch B');

console.log (branchA === branchB);
console.log (branchA.getBranchInfo());
console.log (branchB.getBranchInfo());


