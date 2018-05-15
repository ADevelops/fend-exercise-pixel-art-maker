/* JavaScript function to create the grid when submit button is clicked.
 * It takes in height and width of the grid from the html form and creates
 * the grid on the table canvas element in html page.
 */
function makeGrid() {
    // Varible declarations
    const table = document.getElementById('pixel_canvas');
    const tbody = document.createElement('tbody');
    let height = document.getElementById('input_height').value;
    let width = document.getElementById('input_width').value;
    
    
    // Clear table
    table.innerHTML = '';

	// Table grid creation code :    
    for (var i = 0; i < height; i++) {
        let tr = document.createElement('tr');
        for (var j = 0; j < width; j++) {
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

//jQuery to change color of pixel when clicked.
$('body').on('click', 'td', function() {
    let color = document.getElementById('colorPicker').value;
	$(this).css('background-color', color);
});
