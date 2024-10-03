export default function UniversitiesComp({data}) {
    return (
        <>
            <h2>List</h2>
            <table>
                <tbody>

            {
                data?.map((v, i) => {
                    return (
                        <tr key={i}>
                            <td>{v.name}</td>
                            <td>{v.web_pages[0]}</td>
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
        </>
    )
}