// function handleWindowResize() {
//   console.log('handling window resize...')
//   var BW = $('.banner__container').width()
//   console.log('bw is: ', BW, $('.banner__container').css('height', BW / 2.67))
//   $('.banner__container').css('height', BW / 2.67)
// }

function calcBannerTitleImg() {
  if (window.matchMedia('(max-width: 850px)').matches) {
    $('.banner__section .banner').attr(
      'src',
      '/images/community/community-banner-mobile.png'
    )
  } else {
    $('.banner__section .banner').attr(
      'src',
      '/images/community/community-banner-pc.svg'
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

function setClndrHeight() {
  if (window.matchMedia('(min-width: 700px)').matches) {
    var active_img_H = $('.picture img').height()
    console.log('height: ', active_img_H)
    $('#calendar').css('height', active_img_H)
  } else {
    $('#calendar').css('height', '280px')
  }
}

$(document).ready(function() {
  var events = [
    {
      Date: new Date(2018, 12, 24),
      Title: 'Christmas Eve - Beijing',
      Link: 'https://pingcap.com',
    },
    {
      Date: new Date(2018, 12, 22),
      Title: '第 N 期 Meetup - 上海',
      Link: 'https://pingcap.com/community/devcon2019',
    },
    {
      Date: new Date(2018, 12, 18),
      Title: '第 N 期 Meetup - 上海',
      Link: 'https://pingcap.com/community/devcon2019',
    },
    {
      Date: new Date(2018, 12, 18),
      Title: '第 N 期 Meetup - beijing',
      Link: 'https://pingcap.com/community/devcon2019',
    },
    {
      Date: new Date(2018, 12, 3),
      Title: '25 year anniversary',
      Link: 'https://www.google.com.au',
    },
  ]
  var settings = {
    test: 'testme',
  }

  var element = document.getElementById('calendar')
  calendar(element, events, settings)

  console.log('width: ', $(window).width())

  setClndrHeight()
  calcBannerTitleImg()
  $(window).resize(calcBannerTitleImg)
  $(window).resize(setClndrHeight)

  $('.eventday').click(function() {
    var el = $(this)
    var eventTitles = []
    var eventLinks = []
    for (let i = 1; i < el[0].childNodes.length; i++) {
      eventTitles.push(el[0].childNodes[i].innerText)
      eventLinks.push(el[0].childNodes[i].childNodes[0].href)
    }
    console.log('eventtitles: ', eventTitles)
    createEventListConsole(eventTitles, eventLinks)
  })

  $('.close-icon').click(function() {
    $('.cld-days').show()
    $('.cld-labels').show()
    $('.event-list').hide()
    $('.event').remove()
  })

  $('.signable').click(function() {
    if ($('.overlayCover').css('display') == 'block') {
      $('.overlayCover').hide()
      $('.current-activity-content').hide()
    } else {
      $('.overlayCover').show()
      $('.current-activity-content').show()
    }
  })
})
