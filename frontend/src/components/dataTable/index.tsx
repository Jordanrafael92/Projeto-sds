const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>08/08/2021</td>
                        <td>Arthur Morgan</td>
                        <td>15</td>
                        <td>7</td>
                        <td>544.27</td>
                    </tr>
                    <tr>
                        <td>30/06/2021</td>
                        <td>Dexter Morgan</td>
                        <td>28</td>
                        <td>23</td>
                        <td>14499.87</td>
                    </tr>
                    <tr>
                        <td>15/07/2021</td>
                        <td>Tom Cruise</td>
                        <td>65</td>
                        <td>60</td>
                        <td>189017.00</td>
                    </tr>
                    <tr>
                        <td>07/09/2021</td>
                        <td>Astor Space</td>
                        <td>123</td>
                        <td>98</td>
                        <td>1235689.52</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
