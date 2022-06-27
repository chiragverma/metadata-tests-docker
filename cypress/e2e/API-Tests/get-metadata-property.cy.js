import '../../support/commands.js';

const url = ("https://metadata-server-mock.herokuapp.com/metadata/919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e/properties/name")

describe('Get metadata property', () => {
    
  it('Should get metadata property', () => {
    cy.request({
        method: 'GET',
        url: url,
        
    }).then((response) => {
        cy.checkResponseMessage(response)
        expect(response.body).to.have.property('sequenceNumber')
        expect(response.body).to.have.property('value').equal('HappyCoin')
        expect(response.body).to.have.property('signatures')
        expect(response.body.signatures[0]).to.have.property('signature')
        expect(response.body.signatures[0]).to.have.property('publicKey')
    })
  })
  
});