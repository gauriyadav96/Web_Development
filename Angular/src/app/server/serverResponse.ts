export class ServerResponse{

    private _msg: String;
  
    //getter and setter method
    public get msg(): String {
      return this._msg;
    }
    public set msg(value: String) {
      this._msg = value;
    }
  
  }