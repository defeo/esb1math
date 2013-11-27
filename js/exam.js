$(function() {
    // Generate n copies of page content
    function generate(n) {
	main.empty();
	for (var i = 0; i < n; i++) {
	    main.append($(content));
	}
	evaluate();
    }

    function evaluate() {
    }

    var main = $('.main');
    var content = main.html();

    $('<a href="javascript:void(0)">Generate</a> <input type="number" value=1>')
	.filter('a').on('click', function() {
	    generate($(this).next().val());
	}).end()
	.wrap('<li>')
	.appendTo('#top-menu')

    evaluate();
});