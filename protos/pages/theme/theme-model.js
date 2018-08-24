import {Base} from '../../utils/base.js';

class Theme extends Base{
  constructor(){
    super();
  }

  getTheme(id,callback){
    
    var param = {
      url: 'theme/'+id,
      sSuccess: function(res){
        callback && callback(res);
      }
    }
   this.request(param);
  }
}

export {Theme};