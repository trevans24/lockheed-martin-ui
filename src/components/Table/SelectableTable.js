import React, {Component} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Table.scss';
import fill from '../../polyfills/fill';
import Pagination from '../Pagination/Pagination';
import Settings from '../Settings/Settings';
import Checkbox from '../Selections/Checkbox';

function initColumns(columnNames) {
  const columnData = [];
  columnNames.forEach(name => {
    columnData.push({
      title: name,
      visible: true,
      sort: null
    });
  });

  return columnData;
}

function getCopy(data) {
  // get a copy without references
  return JSON.parse(
    JSON.stringify(data)
  );
}

export default class SelectableTable extends Component {
  constructor(props) {
    super(props);

    const columns = initColumns(this.props.columns);
    this.state = {
      columns: columns,
      columnChanges: getCopy(columns),
      selectedRows: Array(this.props.rows.length).fill(false)
    }

    this.toggleColumn = this.toggleColumn.bind(this);
    this.toggleRowSelected = this.toggleRowSelected.bind(this);
    this.toggleAllSelected = this.toggleAllSelected.bind(this);
    this.commitColumnChanges = this.commitColumnChanges.bind(this);
    this.cancelColumnChanges = this.cancelColumnChanges.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  toggleRowSelected(index) {
    const selections = this.state.selectedRows.slice(0);
    selections[index] = !selections[index];
    this.setState({selectedRows: selections});
  }

  toggleAllSelected() {
    const selected = this.state.selectedRows.slice(0);

    if (selected.every(row => row)) {
      selected.fill(false);
    } else {
      selected.fill(true);
    }

    this.setState({
      selectedRows: selected
    });
  }

  toggleColumn(index) {
    const columns = this.state.columnChanges.slice(0);
    columns[index].visible = !columns[index].visible;
    this.setState({columnChanges: columns});
  }

  commitColumnChanges() {
    const columns = this.state.columnChanges;
    this.setState({
      columns: columns,
      columnChanges: getCopy(columns)
    });
  }

  cancelColumnChanges() {
    const columns = this.state.columns;
    this.setState({
      columns: columns,
      columnChanges: getCopy(columns)
    });
  }

  getCellClassName(column) {
    return !column.visible ? 'column-hidden' : '';
  }
  
  getHeaderCellClassName(column) {
    const className = this.getCellClassName(column);
    return className + (column.sort ? ' sort-' + column.sort : '');
  }
  
  getVisibleColumnCount() {
    return this.state.columns.filter(column => column.visible).length;
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (result.destination.index < 0) result.destination.index = 0;

    const columns = getCopy(this.state.columnChanges);
    const item = columns.splice(result.source.index, 1)[0];
    columns.splice(result.destination.index, 0, item);

    this.setState({columnChanges: columns});
  }

  render() {
    return (
      <div className="table-container selectable-table">
        <div className="table-header-container">
          <table>
            <thead>
              <tr>
                <th>
                  <div onClick={this.toggleAllSelected}>
                    <Checkbox value={this.state.selectedRows.every(row => row)} />
                  </div>
                </th>
                {this.state.columns.map((column, index) =>
                  <th key={index}
                    className={this.getHeaderCellClassName(column)}
                    style={{width: (100 / this.getVisibleColumnCount()) + '%'}}>
                    <div>{column.title}</div>
                  </th>
                )}
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-body-container">
          <table>
            <tbody>
              {this.props.rows.map((row, r) =>
                <tr key={r} onClick={() => this.toggleRowSelected(r)} className={this.state.selectedRows[r] ? 'selected' : ''}>
                  <td>
                    <div>
                      <Checkbox value={this.state.selectedRows[r]} />
                    </div>
                  </td>
                  {this.state.columns.map((column, c) =>
                    <td key={c}
                      className={this.getCellClassName(column)}
                      style={{width: (100 / this.getVisibleColumnCount()) + '%'}}>
                      <div>{row[column.title]}</div>
                    </td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <table>
          <tfoot>
            <tr>
              <td colSpan={this.state.columns.length}>
                <div>
                  <Pagination />
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <Settings title="Customize Columns"
          handleSubmit={this.commitColumnChanges}
          handleCancel={this.cancelColumnChanges}>
          <span>Drag columns in the order you prefer</span>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <ul ref={provided.innerRef}>
                  {this.state.columnChanges.map((column, index) =>
                     <Draggable key={index} draggableId={column.title} index={index}>
                      {(provided, snapshot) => (
                          <li>
                            <div ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              <div onClick={() => this.toggleColumn(index)}>
                                <Checkbox name={'column'-index} value={this.state.columnChanges[index].visible} />
                                <span>{column.title}</span>
                              </div>
                            </div>
                            {provided.placeholder}
                          </li>
                        )}
                      </Draggable>
                  )}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Settings>
      </div>
    );
  }
}
