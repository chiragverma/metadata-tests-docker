import '../../support/commands.js';

const url = ("https://metadata-server-mock.herokuapp.com/metadata/query")
const body = {
  "subjects": ["919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e",
        "789ef8ae89617f34c07f7f6a12e4d65146f958c0bc15a97b4ff169f1"]
}

describe('Create metadata', () => {
    
  it('Should create a metadata', () => {
    cy.request({
        method: 'POST',
        url: url,
        body: body

    }).then((response) => {
        cy.checkResponseMessage(response)
        expect(response.body.subjects[0]).to.have.property('subject').equal('919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e')
        expect(response.body.subjects[0].url.value).equal('https://happy.io')
        expect(response.body.subjects[0].name.value).equal('HappyCoin')
        expect(response.body.subjects[0].ticker.value).equal('HAPPY3')
        expect(response.body.subjects[0]).to.have.property('decimals')
        expect(response.body.subjects[0]).to.have.property('policy')
        expect(response.body.subjects[0]).to.have.property('logo')
        expect(response.body.subjects[0]).to.have.property('description')
    })
  })
});