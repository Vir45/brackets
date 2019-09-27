module.exports = function check(str, bracketsConfig) {
        let result;
          
        let lastResult;
          
        let arr = bracketsConfig.map((item) => {
            
            let target = item[0];
            let pos = 0;
      
            while (true) {
                let index = str.indexOf(target, pos);
                      if (index == -1) break;
                      pos = index + 1;
                let newString = str.slice((index + 1));
          
                if(str.indexOf(item[1]) > index) {
                    result = true;
                } else {
                    result = false;
                };
          
                if(newString.startsWith(item[0]) || newString.startsWith(item[1])) {
                   result = true;
                } else {
                   result = false;
                }
          
                if(index  == str.length - 1) result = false;
            }
      
        return result
        });
          
        if(arr.indexOf(false) >= 0) {
            lastResult = false;
          } else {
            lastResult = true;
          
        }
          
      return lastResult;
}
 
