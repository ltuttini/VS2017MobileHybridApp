(function () {
    "use strict";

    $('#btnObtenerImagen').click(function () {

        navigator.camera.getPicture(imageData => {

            var source = "data:image/jpeg;base64," + imageData;
            $('#showImage').attr('src', source);

        }, message => {
            console.error(message);
        }, 
        {
            destinationType: Camera.DestinationType.DATA_URL
        });

    })

})();