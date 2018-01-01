var confirmBox = confirm('Start swiping right?');
var count = 1;
var like = function(){
    if (confirmBox){
      document.querySelector('[aria-label="Like"]').click();
      console.log('Liked ' + count);						  count++;												};
    setTimeout(like, 100);
};
setTimeout(like, 100);
