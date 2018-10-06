(function() {
    var add_highlighting = function(pattern, color_name) {
        return function(el) {
            if (el) {
                el.innerHTML = el.innerHTML.replace(pattern, '<span class="highlight_' + color_name + '">$1</span>');
            }
        };
    };

    var highlight_attack = add_highlighting(/( (?:a|A) )/g, 'attack');
    var highlight_defence = add_highlighting(/( (?:d|D) )/g, 'defence');
    var highlight_energy = add_highlighting(/( (?:e|E) )/g, 'energy');
    var highlight_right_missiles = add_highlighting(/((?:&gt;)+)/g, 'attack');
    var highlight_left_missiles = add_highlighting(/((?:&lt;)+)/g, 'attack');
    var highlight_tesla_towers = add_highlighting(/( (?:T|t) )/g, 'tesla');
    var highlight_iron_curtain = add_highlighting(/( \/ )/g, 'iron_curtain');
    

    var highlight = function(el) {
        
        highlight_right_missiles(el);
        highlight_left_missiles(el);
        highlight_attack(el);
        highlight_defence(el);
        highlight_energy(el);
        highlight_tesla_towers(el);
        highlight_iron_curtain(el);

    };

    $(document).ready(function() {
        $('.board').each(function() { highlight(this); });
    });

})();


