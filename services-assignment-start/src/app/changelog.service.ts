export class ChangeLogService{
    userRecord: {[name:string]: {active_count:number, inactive_count:number}} = {};

    constructor(){}

    updateRecord(name:string, action:string){
        if(!this.userRecord[name]){
            this.userRecord[name] = {active_count:0, inactive_count:0};
        }
        if(action === 'active'){
            this.userRecord[name].active_count++;
        }else{
            this.userRecord[name].inactive_count++;
        }
    }

    getRecord(name:string){
        console.log(`${name} | Active: ${this.userRecord[name].active_count} | Inactive: ${this.userRecord[name].inactive_count}`)
    }
}