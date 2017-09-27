

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        $('#cordova').val(device.cordova);
        $('#model').val(device.model);
        $('#platform').val(device.platform);
        $('#uuid').val(device.uuid);
        $('#version').val(device.version);
        $('#manufacturer').val(device.manufacturer);
        $('#isVirtual').val(device.isVirtual);
        $('#serial').val(device.serial);


    };

})();


