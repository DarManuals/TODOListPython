import React from 'react';
import {Table,Glyphicon} from 'react-bootstrap';

class AddForm extends React.Component {

    constructor() {
            super();
            this.switchColor.bind(this);
    }

    switchColor(priority){
        var priorityColor = "alert alert-warning";
        var priorityName = "DEFAULT";

        switch(priority) {
               case 3:
                    priorityColor = "alert alert-danger";
                    priorityName = "HIGH";
                    break;

               case 1:
                    priorityColor = "alert alert-success";
                    priorityName = "LOW";
                    break;

               default:
               break;
        }

        return {prCol: priorityColor, prName: priorityName};
    }

   render() {
    return (
      <div>
        <Table>
              <thead>
                  <tr>
                       <th>Task name</th><th> </th><th>ID</th><th>Priority</th>
                  </tr>
              </thead>
              <tbody>
                   {
                        this.props.tasks.map( (t,i) =>
                            <tr className={this.switchColor(t.priority).prCol}>
                                 <td >{t.name}</td><td> </td>
                                 <td>{t.id}</td>
                                 <td>
                                      <span>{this.switchColor(t.priority).prName}</span>
                                      <span className="pull-right" ><Glyphicon glyph="glyphicon glyphicon-remove" onClick={() => this.props.onDelete(t.id)} /></span>
                                 </td>
                            </tr>
                        )
                   }
              </tbody>
        </Table>
      </div>
    );
  }
}

export default AddForm;