import '../../support/commands.js';

const url = ("https://metadata-server-mock.herokuapp.com/metadata/919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e")

describe('Get metadata', () => {

  it('Should get metadata', () => {
    cy.request({
        method: 'GET',
        url: url

    }).then((response) => {
        cy.checkResponseMessage(response)
        expect(response.body).to.have.property('subject').equal('919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e')
        expect(response.body.url.value).equal('https://happy.io')
        expect(response.body.name.value).equal('HappyCoin')
        expect(response.body.ticker.value).equal('HAPPY3')
        expect(response.body).to.have.property('decimals')
        expect(response.body).to.have.property('policy')
        expect(response.body).to.have.property('logo')
        expect(response.body.description.value).equal('Coin with asset name - and everyone is happy!!!')
    })
  })
});