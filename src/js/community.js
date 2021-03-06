function calcBannerTitleImg() {
  if (window.matchMedia('(max-width: 700px)').matches) {
    $('.signable img').attr(
      'src',
      'https://download.pingcap.com/images/mobileDevCon.png'
    )
  } else {
    $('.signable img').attr(
      'src',
      'https://download.pingcap.com/images/PCdevCon.png'
    )
  }
}

function createEventListConsole(eventTitles, eventLinks) {
  $('.cld-days').hide()
  $('.cld-labels').hide()
  $('.event-list').show()
  for (let i = 0; i < eventTitles.length; i++) {
    var event = document.createElement('div')
    event.className = 'event'
    event.innerHTML =
      '<a href="' + eventLinks[i] + '">' + eventTitles[i] + '</a>'
    $('.event-list').append(event)
  }
}

$(document).ready(function() {
  var events = [
    {
      Date: new Date(2019, 1, 19),
      Title: 'TiDB DevCon 2019',
      Link: 'https://pingcap.com/community-cn/devcon2019',
    },
  ]
  var settings = {
    test: 'testme',
  }

  var element = document.getElementById('calendar')
  calendar(element, events, settings)

  // setClndrHeight()
  calcBannerTitleImg()
  $(window).resize(calcBannerTitleImg)

  // displays events in this selected day
  $('.eventday').click(function() {
    var el = $(this)
    var eventTitles = []
    var eventLinks = []
    for (let i = 1; i < el[0].childNodes.length; i++) {
      eventTitles.push(el[0].childNodes[i].innerText)
      eventLinks.push(el[0].childNodes[i].childNodes[0].href)
    }
    createEventListConsole(eventTitles, eventLinks)
  })

  $('.close-icon').click(function() {
    $('.cld-days').show()
    $('.cld-labels').show()
    $('.event-list').hide()
    $('.event').remove()
  })
})
