App.Data = function() {
    var loadFromFile = function(file) {
        $.getJSON(file, function(data) {
            $.each(data, function(key, info) {
                var type;
                switch(info.type) {
                    case 'nidoranm': type = 'Nidoran ♂'; break;
                    case 'nidoranf': type = 'Nidoran ♀'; break;
                    default: type = info.type.substr(0, 1).toUpperCase() + info.type.substr(1);
                }
                $('<paper-card/>', {
                    'heading': type,
                    'image': 'assets/img/pgo/' + info.type + '.png',
                    'fadeImage': true,
                    'preloadImage': true,
                    'class': 'col-sm-2 col-xs-4',
                    'html': '<div class="card-content">' +
                    '<p>' +
                        'CP <strong>' + info.cp + '</strong><br>' +
                        info.weight[0] + ' kg<br>' +
                        Math.round(info.height[0] * 100) + ' cm' +
                    '</p>' +
                    (info.weight[1] || info.height[1] ? '<small class="size">' +
                    (info.weight[1] ? (info.weight[1] == 'XL' ? ' heavy ' : ' slim ') : '') +
                    (info.height[1] ? (info.height[1] == 'XL' ? ' large ' : ' small ') : '') +
                    '</small>' : '') +
                    '</div>'
                }).appendTo('#content');
            });
        });
    };

    return {
        loadFromFile: loadFromFile
    };
}();