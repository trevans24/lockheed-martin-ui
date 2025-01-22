import React, {Component} from 'react';
// COMPONENTS
import tableSampleData from '../../src/components/Table/tableSampleData.json';
import Table from '../../src/components/Table/Table';
import SelectableTable from '../../src/components/Table/SelectableTable';
import TableWithSearch from '../../src/components/Table/TableWithSearch';
import TableWithRowActions from '../../src/components/Table/TableWithRowActions';
import TableWithFixedColumn from '../../src/components/Table/TableWithFixedColumn';

export default class Tables extends Component {
  render() {
    return (
      <div>
        <section className="table-example">
          <h2 className="header-1 text-center">Basic Table</h2>
          <div className="highlight">
            <pre>
              <span className="tag">&lt;div</span>
              <span className="attr"> className=</span>
              <span className="quote">"table-container"</span>
              <span className="tag">&gt;</span>
            </pre>
            <pre className="line-2">
              <span className="tag">&lt;table&gt;</span>
            </pre>
            <pre className="line-3">
              <span className="tag">&lt;thead&gt;</span>
            </pre>
            <pre className="line-4">
              <span className="tag">&lt;tr&gt;</span>
            </pre>
            <pre className="line-5">
              <span className="tag">&lt;th&gt;</span>
            </pre>
            <pre className="line-6">
              <span className="tag">&lt;div&gt;</span>
              <span className="content">...header cell content...</span>
              <span className="tag">&lt;/div&gt;</span>
            </pre>            
            <pre className="line-5">
              <span className="tag">&lt;/th&gt;</span>
            </pre>
            <pre className="line-4">
              <span className="tag">&lt;/tr&gt;</span>
            </pre>
            <pre className="line-3">
              <span className="tag">&lt;/thead&gt;</span>
            </pre>
            <pre className="line-3">
              <span className="tag">&lt;tbody&gt;</span>
            </pre>
            <pre className="line-4">
              <span className="tag">&lt;tr&gt;</span>
            </pre>
            <pre className="line-5">
              <span className="tag">&lt;td&gt;</span>
            </pre>
            <pre className="line-6">
              <span className="tag">&lt;div&gt;</span>
              <span className="content">...body cell content...</span>
              <span className="tag">&lt;/div&gt;</span>
            </pre>            
            <pre className="line-5">
              <span className="tag">&lt;/td&gt;</span>
            </pre>
            <pre className="line-4">
              <span className="tag">&lt;/tr&gt;</span>
            </pre>
            <pre className="line-3">
              <span className="tag">&lt;/tbody&gt;</span>
            </pre>
            <pre className="line-2">
              <span className="tag">&lt;/table&gt;</span>
            </pre>
            <pre>
              <span className="tag">&lt;/div&gt;</span>
            </pre>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>
                    <div>Name</div>
                  </th>
                  <th>
                    <div>Service Points</div>
                  </th>
                  <th>
                    <div>Druid</div>
                  </th>
                  <th>
                    <div>Type</div>
                  </th>
                  <th>
                    <div>Device</div>
                  </th>
                  <th>
                    <div>Program</div>
                  </th>
                  <th>
                    <div>Opt Out</div>
                  </th>
                  <th>
                    <div>Predicted Reduction</div>
                  </th>
                  <th>
                    <div>Actual Reduction</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>Cecilia Barnett</div>
                  </td>
                  <td>
                    <div>24601</div>
                  </td>
                  <td>
                    <div>24601</div>
                  </td>
                  <td>
                    <div>Customer</div>
                  </td>
                  <td>
                    <div>On Off</div>
                  </td>
                  <td>
                    <div>SmartAC</div>
                  </td>
                  <td>
                    <div>No Opt</div>
                  </td>
                  <td>
                    <div>2.0</div>
                  </td>
                  <td>
                    <div>2.6</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Wesley Ellis</div>
                  </td>
                  <td>
                    <div>12467</div>
                  </td>
                  <td>
                    <div>12467</div>
                  </td>
                  <td>
                    <div>Customer</div>
                  </td>
                  <td>
                    <div>On Off</div>
                  </td>
                  <td>
                    <div>SmartAC</div>
                  </td>
                  <td>
                    <div>No Opt</div>
                  </td>
                  <td>
                    <div>2.0</div>
                  </td>
                  <td>
                    <div>2.6</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Caleb Mack</div>
                  </td>
                  <td>
                    <div>32436</div>
                  </td>
                  <td>
                    <div>32436</div>
                  </td>
                  <td>
                    <div>Customer</div>
                  </td>
                  <td>
                    <div>On Off</div>
                  </td>
                  <td>
                    <div>SmartAC</div>
                  </td>
                  <td>
                    <div>No Opt</div>
                  </td>
                  <td>
                    <div>2.0</div>
                  </td>
                  <td>
                    <div>2.6</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Dorothy Hicks</div>
                  </td>
                  <td>
                    <div>56890</div>
                  </td>
                  <td>
                    <div>56890</div>
                  </td>
                  <td>
                    <div>Customer</div>
                  </td>
                  <td>
                    <div>On Off</div>
                  </td>
                  <td>
                    <div>SmartAC</div>
                  </td>
                  <td>
                    <div>No Opt</div>
                  </td>
                  <td>
                    <div>2.0</div>
                  </td>
                  <td>
                    <div>2.6</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Danny Potter</div>
                  </td>
                  <td>
                    <div>24681</div>
                  </td>
                  <td>
                    <div>24681</div>
                  </td>
                  <td>
                    <div>Customer</div>
                  </td>
                  <td>
                    <div>On Off</div>
                  </td>
                  <td>
                    <div>SmartAC</div>
                  </td>
                  <td>
                    <div>No Opt</div>
                  </td>
                  <td>
                    <div>2.0</div>
                  </td>
                  <td>
                    <div>2.6</div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="12">
                    <div>
                      {/*<Pagination />*/}
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

        </section>
        <section className="table-example">
          <h2 className="header-1 text-center">Dynamic Table from JSON</h2>
          <div className="highlight">
            JSON
            <pre>
              <span className="json">&#123;</span>
            </pre>
            <pre className="line-2">
              <span className="attr">"columns": </span>
              <span className="json">[ </span>
              <span className="content">"Name", "Program Type", "Status"</span>
              <span className="json"> ],</span>
            </pre>
            <pre className="line-2">
              <span className="attr">"rows": </span>
              <span className="json">[</span>
            </pre>
            <pre className="line-3">
              <span className="json">&#123; </span>
            </pre>
            <pre className="line-4">
              <span className="content">"Name": </span>
              <span className="json">"Program ABC", </span>
            </pre>
            <pre className="line-4">
              <span className="content">"Program Type": </span>
              <span className="json">"CFF Program", </span>
            </pre>
            <pre className="line-4">
              <span className="content">"Status": </span>
              <span className="json">"Active"</span>
            </pre>
            <pre className="line-3">
              <span className="json"> &#125;</span>
            </pre>
            <pre className="line-2">
              <span className="json">]</span>
            </pre>
            <pre>
              <span className="json">&#125;</span>
            </pre>
          </div>
          <div className="highlight">
            JSX
            <pre>
              <span className="tag">&lt;Table</span>
              <span className="attr"> columns=</span>
              <span className="quote">&#123;</span>
              <span className="quote">tableData.columns</span>
              <span className="quote">&#125;</span>
              <span className="attr"> rows=</span>
              <span className="quote">&#123;</span>
              <span className="quote">tableData.rows</span>
              <span className="quote">&#125;</span>
              <span className="tag"> /&gt;</span>
            </pre>
          </div>
          <Table columns={tableSampleData.columns} rows={tableSampleData.rows} />
        </section>
        <section className="table-example">
          <h2 className="header-1 text-center">Dynamic Table with Selectable Rows</h2>
          <SelectableTable columns={tableSampleData.columns} rows={tableSampleData.rows} />
        </section>
        <section className="table-example">
          <h2 className="header-1 text-center">Table with Row Actions</h2>
          <TableWithRowActions />
          <div className="highlight">
            Row Actions Menu
            <pre>
              <span className="tag">&lt;Actions&gt;</span>
            </pre>
            <pre className="line-2">
              <span className="tag">&lt;div</span>
              <span className="attr"> onClick=&#123;...&#125;</span>
              <span>&gt;</span>
            </pre>
            <pre className="line-3">
              <span className="tag">&lt;img </span>
              <span className="attr">src=</span>
              <span className="quote">&#123;editIcon&#125; </span>
              <span className="tag">/&gt;</span>
            </pre>
            <pre className="line-3">
              <span className="tag">&lt;span&gt;</span>
              <span className="quote">Edit</span>
              <span className="tag">&lt;/span&gt;</span>
            </pre>
            <pre className="line-2">
              <span className="tag">&lt;/div&gt;</span>
            </pre>
            <pre className="line-2">
              <span className="tag">&lt;div</span>
              <span className="attr"> onClick=&#123;...&#125;</span>
              <span>&gt;</span>
            </pre>
            <pre className="line-3">
              <span className="tag">&lt;img </span>
              <span className="attr">src=</span>
              <span className="quote">&#123;deleteIcon&#125; </span>
              <span className="tag">/&gt;</span>
            </pre>
            <pre className="line-3">
              <span className="tag">&lt;span&gt;</span>
              <span className="quote">Delete</span>
              <span className="tag">&lt;/span&gt;</span>
            </pre>
            <pre className="line-2">
              <span className="tag">&lt;/div&gt;</span>
            </pre>
            <pre>
              <span className="tag">&lt;/Actions&gt;</span>
            </pre>

          </div>
            
        </section>
        <section className="table-search-example">
          <h2 className="header-1 text-center">Table with Search</h2>
          <TableWithSearch />
        </section>
        <section className="table-fixed-column-example">
          <h2 className="header-1 text-center">Fixed Column Table</h2>
          <TableWithFixedColumn />
        </section>
      </div>
    )
  }
}
