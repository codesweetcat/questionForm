

describe("renders the home page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
    describe("question set API testing", () => {
        it("fetch question sets - GET", () => {
            cy.request('/').as('allQuestionSetsRequest');
            cy.get('@allQuestionSetsRequest').then(questionSets => {
               expect(questionSets.status).to.eq(200);
               assert.isArray(questionSets.body.question_sets, 'questionSets Response is an array')
           })
          });
          it("renders correctly", () => {
            cy.get("form").should("exist");
          });
      });
      
      describe("Answers API - POST", () => {
        it("check ALL box and Submit", () => {
            cy.get('[type="checkbox"]')
                .as('checkboxes')
                .check()

            cy.contains('Submit').click()
            .then(() => {
                cy.on('window:alert', (str) => {
                    expect(str).to.equal(`Answers add successfully!`)
                  })
            })  
        });

        it(" none checkbox clicked", () => {
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Some error occured`)
              })
        });

    })

  

})


