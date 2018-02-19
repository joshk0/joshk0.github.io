$.ajax({
  url: 'https://circleci.com/api/v1.1/project/github/joshk0/resume/latest/artifacts',
  dataType: 'json'
}).done(function(data) {
  $('#resume-link').attr('href', data[0].url);
})
