export class Todo {
    description: string;
    id: number;
   
   
    constructor(description: string, id : number) {
        this.description = description;  
        this.id = id;      
    }

    create() {
        $("#table").find('tbody')
            .prepend($('<tr>')
                .attr('id', this.id.toString())
                .append($('<td>')
                    .text(this.description)
                )
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                    )
                )
            );

        $('#' + this.id.toString() + ' td input:checkbox').change(
            function () {
                if ($(this).is(':checked')) {                 
                        var oldDesc = $(this).parent().parent().find('td:first').text();
                        $(this).parent().parent().find('td:first').text("");
                        $(this).parent().parent().find('td:first')
                            .append($('<s>')
                                .text(oldDesc)
                            );                  
                } else { 
                    var oldDesc = $(this).parent().parent().find('td:first s').text();
                    $(this).parent().parent().find('td:first s').remove();
                    $(this).parent().parent().find('td:first').text(oldDesc);                                              
                }
            });
    }
}