$('[title]').each( function() {
    var mytitle = $(this);
    mytitle.data('title',mytitle.attr('title')); // get title attribute value
mytitle.attr('name', mytitle.attr('title')); // add title attribute value to NAME attribute
    mytitle.removeAttr('title'); // remove the title attribute, removing browser tooltip
});