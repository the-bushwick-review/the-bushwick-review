$(document).ready(function () {
    //if cookie hasn't been set...
    if (document.cookie.indexOf("ModalShown=true")<0) {
      var now = new Date();
      var time = now.getTime();
      var expireTime = time + 10;
      now.setTime(expireTime);
      $("#modal-ocho").modal("show");
      $("#modal-close").click(function () {
        $('#modal-ocho').modal('hide');
      });
      document.cookie = "ModalShown=true; expires=+expireTime+; path=/";
    }
});
