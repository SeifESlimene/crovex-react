/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory, {
  PaginationProvider,
  SizePerPageDropdownStandalone,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

// const data = [
// {
//   id: '1',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '10',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '2',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '15',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '3',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '16',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '4',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '5',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '105',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '6',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '10',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '7',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '15',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '8',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '16',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '9',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '10',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '105',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '11',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '16',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '12',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '13',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '14',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '15',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '16',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '17',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '18',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '19',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '20',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '21',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '22',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '23',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '24',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '25',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '26',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '27',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '28',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '10',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '29',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '15',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '30',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '16',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '31',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '32',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '105',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '33',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '10',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '34',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '15',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '35',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '16',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '36',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '37',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '105',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '38',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '16',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '39',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '40',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '41',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '42',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '43',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '44',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '45',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '46',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '47',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '48',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '49',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '50',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '51',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '52',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '53',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// {
//   id: '54',
//   name: 'Tiger Nixon',
//   position: 'System Architect',
//   office: 'Edinburgh',
//   Age: '20',
//   start_date: '2011/04/25',
//   salary: '$320,800',
// },
// ];

const columns = [
  {
    dataField: 'id',
    text: 'ID',
    sort: true,
  },
  {
    dataField: 'first_name',
    text: 'First Name',
    sort: true,
  },
  {
    dataField: 'last_name',
    text: 'Last Name',
    sort: true,
  },
  {
    dataField: 'email',
    text: 'E-Mail',
    sort: true,
  },
  {
    dataField: 'phone',
    text: 'Phone',
    sort: true,
  },
  {
    dataField: 'country',
    text: 'Country',
    sort: true,
  },
  {
    dataField: 'city',
    text: 'City',
    sort: true,
  },
  {
    dataField: 'street',
    text: 'Street',
    sort: true,
  },
  {
    dataField: 'zip_code',
    text: 'Zip Code',
    sort: true,
  },
  {
    dataField: 'company',
    text: 'Company',
    sort: true,
  },
  {
    dataField: 'tax_reference_number',
    text: 'Tax Reference Number',
    sort: true,
  },
  {
    dataField: 'actions',
    text: 'Actions',
    sort: false,
    style: (cell, row, rowIndex, colIndex) => {
      console.log(cell);
      console.log(row);
      console.log(rowIndex);
      console.log(colIndex);
      return {
        // backgroundColor: '#fff',
        // zIndex: '10000'
        // display: 'flex',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // marginRight: '20px'
      };
    },
  },
];

// const paginationOption = {
//   alwaysShowAllBtns: true,
//   withFirstAndLast: false,
//   custom: true,
//   totalSize: data.length,
//   sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
//     <div className='dataTables_length' id='datatable-basic_length'>
//       <label className='showperpage'>
//         Show{' '}
//         {
//           <select
//             name='datatable-basic_length'
//             aria-controls='datatable-basic'
//             className='form-control form-control-sm'
//             onChange={e => onSizePerPageChange(e.target.value)}
//           >
//             <option value='10'>10</option>
//             <option value='25'>25</option>
//             <option value='50'>50</option>
//             <option value='100'>100</option>
//           </select>
//         }{' '}
//         entries.
//       </label>
//     </div>
//   ),
// };

// const rowStyle2 = (row, rowIndex) => {
// const style = {};
// if (row.id > 1) {
//   // style.backgroundColor = '#00BFFF';
// }
// return style;
// };

// const rowEvents = {
// onClick: (e, row, rowIndex) => {
//   console.log(`clicked on row with index: ${rowIndex}`);
// },
// onMouseEnter: (e, row, rowIndex) => {
//   console.log(e);
// }
// };

// const rowClasses = (row, rowIndex) => {
//   let classes = null;

//   if (rowIndex >= 0) {
//     classes = 'index-bigger-than-0-or-equal';
//   }

//   return classes;
// };

const act = () => (
  <>
    <a href='#' className='btn btn-primary btn-sm br editt'>
      <span className='far fa-edit fa-1x' aria-hidden='true'></span>{' '}
      {/* <span>
        <strong>Edit</strong>
      </span> */}
    </a>
    <a href='#' className='btn btn-primary btn-sm br dell'>
      <span className='fa fa-trash fa-1x' aria-hidden='true'></span>{' '}
      {/* <span>
        <strong>Delete</strong>
      </span> */}
    </a>
  </>
);

const selectRow = {
  mode: 'radio',
  clickToSelect: true,
  // clickToEdit: true,
  hideSelectColumn: true,
  classes: 'selection-row',
  // onSelect: (row, isSelect, rowIndex, e) => {
  //   const indexes = [];
  //   const dell = document.getElementsByClassName('dell')[rowIndex];
  // dell.style.backgroundColor = 'rgb(0,0,0)';
  //   indexes.push(rowIndex);
  //   console.log(indexes);
  // },
  // bgColor: 'rgb(94, 114, 228)',
  // color: 'rgb(255, 255, 255)',
  // selectColumnStyle: ({ checked, disabled, rowIndex, rowKey }) => {
  //   console.log(rowKey);
  //   console.log(rowIndex);
  //   const dell = document.getElementsByClassName('dell')[rowIndex];
  //   dell.style.backgroundColor = 'rgb(0,0,0)';
  // },
};

const { SearchBar } = Search;

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch('http://localhost/crovex/Crovex/HTML/dashboard/customers.php')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ data: data });
      });
    const aut = document.getElementById('search-bar-0');
    aut.setAttribute('autocomplete', 'off');
  }
  render() {

    this.state.data.map(obj => {
      obj.actions = act();
    });

    const paginationOption = {
      alwaysShowAllBtns: true,
      withFirstAndLast: false,
      custom: true,
      totalSize: this.state.data.length,
      sizePerPageRenderer: ({
        options,
        currSizePerPage,
        onSizePerPageChange,
      }) => (
        <div className='dataTables_length' id='datatable-basic_length'>
          <label className='showperpage'>
            Show{' '}
            {
              <select
                name='datatable-basic_length'
                aria-controls='datatable-basic'
                className='form-control form-control-sm'
                onChange={e => onSizePerPageChange(e.target.value)}
              >
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
            }{' '}
            entries.
          </label>
        </div>
      ),
    };

    console.log(this.state.data);

    return (
      <>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='page-title-box'>
              <div className='float-right'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href=''>Crovex</a>
                  </li>
                  <li className='breadcrumb-item'>
                    <a href=''>Storage</a>
                  </li>
                  <li className='breadcrumb-item active'>Stock Yarn</li>
                </ol>
              </div>
              <h4 className='page-title'>Yarn List</h4>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              {
                <PaginationProvider
                  pagination={paginationFactory(paginationOption)}
                >
                  {({ paginationProps, paginationTableProps }) => (
                    <>
                      <div className='py-4'>
                        <ToolkitProvider
                          keyField='id'
                          data={this.state.data}
                          columns={columns}
                          search
                        >
                          {props => (
                            <>
                              <div
                                id='datatable-basic_filter'
                                className='dataTables_filter px-4 filter-search-ses'
                                style={{ float: 'right !important' }}
                              >
                                <label>
                                  Search:
                                  <SearchBar
                                    className='form-control-sm'
                                    placeholder=''
                                    {...props.searchProps}
                                  />
                                </label>
                              </div>
                              <div className='show1'>
                                <SizePerPageDropdownStandalone
                                  {...paginationProps}
                                />
                              </div>

                              <BootstrapTable
                                {...props.baseProps}
                                cellEdit={ cellEditFactory({ mode: 'click' }) }
                                keyField='id'
                                data={this.state.data}
                                columns={columns}
                                bordered={false}
                                bootstrap4={true}
                                // rowStyle={rowStyle2}
                                // selectRow={selectRow}
                                // rowEvents={rowEvents}
                                // rowClasses={rowClasses}
                                condensed={false}
                                striped={false}
                                {...paginationTableProps}
                              />
                              <div className='show1'>
                                <PaginationTotalStandalone
                                  {...paginationProps}
                                />
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </div>
                            </>
                          )}
                        </ToolkitProvider>
                      </div>
                    </>
                  )}
                </PaginationProvider>
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}
