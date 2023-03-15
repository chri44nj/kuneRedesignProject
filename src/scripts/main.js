// https://zadcnepblqcmzlxelrhb.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphZGNuZXBibHFjbXpseGVscmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4OTAzMTAsImV4cCI6MTk5NDQ2NjMxMH0.kI4z8TZt2TNdOSDku4oWLr3MsZQti7pRGfPc4traZp0

fetch("https://zadcnepblqcmzlxelrhb.supabase.co/rest/v1/artists", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphZGNuZXBibHFjbXpseGVscmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4OTAzMTAsImV4cCI6MTk5NDQ2NjMxMH0.kI4z8TZt2TNdOSDku4oWLr3MsZQti7pRGfPc4traZp0",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
}
