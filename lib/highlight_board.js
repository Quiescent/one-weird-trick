(function() {
    var add_highlighting = function(pattern, color_name) {
        return function(el) {
            if (el) {
                el.innerHTML = el.innerHTML.replace(pattern, '<span class="highlight_' + color_name + '">$1</span>');
            }
        };
    };

    var highlight_attack = add_highlighting(/( (?:a|A) )/g, 'red');
    var highlight_defence = add_highlighting(/( (?:d|D) )/g, 'green');
    var highlight_energy = add_highlighting(/( (?:e|E) )/g, 'blue');
    var highlight_right_missiles = add_highlighting(/((?:&gt;)+)/g, 'red');
    var highlight_left_missiles = add_highlighting(/((?:&lt;)+)/g, 'red');

    var highlight = function(el) {
        
        highlight_right_missiles(el);
        highlight_left_missiles(el);
        highlight_attack(el);
        highlight_defence(el);
        highlight_energy(el);

    };

    $(document).ready(function() {
        $('.board').each(function() { highlight(this); });
    });

})();


