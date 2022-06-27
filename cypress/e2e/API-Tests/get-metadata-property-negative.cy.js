const url = ("https://metadata-server-mock.herokuapp.com/metadata/919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f6/properties/name")

describe('Not able to find metadata property', () => {
    
  it('Should get metadata property not found', () => {
    cy.request({
        method: 'GET',
        url: url
        
    }).then((response) => {
        expect(response.body).equal("Requested subject '919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f6' not found")
    })
  })
  
});