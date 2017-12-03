import React, {Component} from 'react';

const head = [
    ['First Name', 'Last Name', 'Birth Date']
]

class SortableTable extends Component {
    constructor() {
        super();

        this.state = {
            algorithm: 'ascendant',
            data: [

                ['Angus', 'Young', '1955-03-31'],
                ['Malcolm', 'Young', '1953-01-06'],
                ['George', 'Young', '1946-11-06'],
                ['Bon', 'Scott', '1946-07-09'],
                ['Phil', 'Rudd', '1954-05-19'],
                ['Cliff', 'Williams', '1949-12-14'],

            ]
        }
    }

    printTable = () => {
        const {data} = this.state;
        return <table>
            <thead>
            <tr>
                {
                    head.map((head) => {
                        return head.map((ths, index) => {
                            return <th key={index}
                                       onClick={this.sorting.bind(this, index)}>
                                {ths}
                            </th>
                        })

                    })
                }

            </tr>
            </thead>
            <tbody>
            {data.map((trs, ind) => {
                return <tr key={ind}>
                    
                    {trs.map((tds, i) => {
                        return <td key={i}>{tds}</td>
                    })}
                </tr>
            })
            }
            </tbody>
        </table>
    }

    sorting = (index) => {
        const {data} = this.state;
        const {algorithm} = this.state;

        const _data = data.sort((a, b) =>
            a[index].localeCompare(b[index]));

        if (algorithm === 'ascendant') {
            this.setState({
                algorithm: 'descendant',
                data: _data
            });
        } else {
            this.setState({
                data: _data.reverse(),
                algorithm: 'ascendant'
            })
        }

        console.log(this.state)
    }


    render() {
        return (
            <div className="">
                {this.printTable()}
            </div>
        );
    }
}

export default SortableTable;
