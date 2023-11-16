import React from 'react';

function Content() {
  // Generate random data
  const generateRandomData = () => {
    const data = [];
    for (let i = 1; i <= 5; i++) {
      data.push({
        id: `Chatbot${i}`,
        name: `Chatbot ${i} Name`,
        dataset: `Dataset ${i}`,
        model: `Model ${i}`,
        status: Math.random() > 0.5 ? 'Copmleted' : 'Pending',
        deploy: Math.random() > 0.5 ? 'Deploy' : 'Not Deploy',
        rag: Math.random() > 0.5 ? 'Config' : 'Active',
      });
    }
    return data;
  };

  const randomData = generateRandomData();

  return (
    <>
      <section className='table-data'>
        <table className="full-width-table">
          <thead>
            <tr>
              <th>Chatbot ID</th>
              <th>Chatbot Name  <span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
                  <svg
                    className="sort"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{ marginLeft: '5px' }}
                  >
                    <path d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                </span>
</th>
              <th>Dataset Name  <span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
                  <svg
                    className="sort"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{ marginLeft: '5px' }}
                  >
                    <path d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                </span></th>
              <th>Model Name  <span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
                  <svg
                    className="sort"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{ marginLeft: '5px' }}
                  >
                    <path d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                </span></th>
              <th>Status  <span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
                  <svg
                    className="sort"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{ marginLeft: '5px' }}
                  >
                    <path d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                </span></th>
              <th>Deploy  <span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
                  <svg
                    className="sort"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{ marginLeft: '5px' }}
                  >
                    <path d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                </span></th>
              <th>RAG  <span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
                  <svg
                    className="sort"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{ marginLeft: '5px' }}
                  >
                    <path d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                </span></th>
            </tr>
          </thead>
          <tbody>
            {randomData.map((item, index) => (
              <tr key={index}>
                <td>{item.id} </td>
                <td>{item.name}</td>
                <td>{item.dataset}</td>
                <td>{item.model}</td>
                <td>{item.status}</td>
                <td style={{textAlign:"center"}}>

                <button style={{ width: "100px",padding:"10px", 
                    backgroundColor: item.status === 'Copmleted' ? 'gray' : ' #2D6086' }}>{item.deploy}</button>
                </td>
                <td style={{textAlign:"center"}}>

                <button style={{ width: "80px",padding:"10px",
                 backgroundColor: item.rag === 'Config' ? '#2D6086' : ' gray' 
                }}>{item.rag}</button>
                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Content;
