String.prototype.trim=function(){
      return this.replace(/(^\s*)|(\s*$)/g, "");
   }
   String.prototype.ltrim=function(){
      return this.replace(/(^\s*)/g,"");
   }
   String.prototype.rtrim=function(){
      return this.replace(/(\s*$)/g,"");
   }

   function trim(str){ //ɾ���������˵Ŀո�
       return str.replace(/(^\s*)|(\s*$)/g, "");
   }
   function ltrim(str){ //ɾ����ߵĿո�
       return str.replace(/(^\s*)/g,"");
   }
   function rtrim(str){ //ɾ���ұߵĿո�
       return str.replace(/(\s*$)/g,"");
   }
 