$(document).ready(function() {
    $.ajax({
      url: 'languages.json',
      dataType: 'json',
      success: function(data) {
        var table = $('<table>');
        var tableHead = $('<thead>').appendTo(table);
        var headerRow = $('<tr>').appendTo(tableHead);
        headerRow.append($('<th>').text('Code'));
        headerRow.append($('<th>').text('Name'));
  
        var tableBody = $('<tbody>').appendTo(table);
        $.each(data, function(index, language) {
          var row = $('<tr>');
          row.append($('<td>').text(language.code));
          row.append($('<td>').text(language.name));
          tableBody.append(row);
        });
  
        $('#tableContainer').append(table);
      },
      error: function() {
        console.error('Error fetching language data.');
      }
    });
  });