import '../../support/commands.js';

const url = ("https://metadata-server-mock.herokuapp.com/metadata/919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f")

describe('Get metadata not found error', () => {

  it('Should get metadata not found error', () => {
    cy.request({
        method: 'GET',
        url: url
        
    }).then((response) => {
        expect(response.body).equal("Requested subject '919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f' not found")
    })
  })
});