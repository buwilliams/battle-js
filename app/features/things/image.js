game.code('image', ['loop', 'util',
function(loop, util) {

    return function(overrideAttrs) {
        var attrs = {
            label: 'image',
            image: '',
            imageInstance: null,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            cropX: 0,
            cropY: 0,
            cropWidth: null,
            cropHeight: null
        };

        var loadImage = function() {
            var img = new Image();
            img.src = attrs.image;
            attrs.imageInstance = img;
        };

        var paint = function(state) {
            if(attrs.imageInstance === null) {
                loadImage();
            }

            var imageWidth = (attrs.cropWidth === null) ? attrs.width : attrs.cropWidth;
            var imageHeight = (attrs.cropHeight === null) ? attrs.height : attrs.cropHeight;
            var imageX = (attrs.cropX === null) ? 0 : attrs.cropX;
            var imageY = (attrs.cropY === null) ? 0 : attrs.cropY;

            state.ctx.drawImage(attrs.imageInstance,
                                imageX, imageY, imageWidth, imageHeight,
                                attrs.x, attrs.y, attrs.width, attrs.height);
        };

        if(typeof overrideAttrs !== 'undefined') {
          util.extend(attrs, overrideAttrs);
        }

        return {
            attrs: attrs,
            paint: paint
        };
    };
}
]);
