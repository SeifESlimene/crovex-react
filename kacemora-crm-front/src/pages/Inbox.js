/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
// import user1 from '../img/user-1.jpg';
// import user2 from '../img/user-2.jpg';
// import user3 from '../img/user-3.jpg';
// import user4 from '../img/user-4.jpg';

export default class inbox extends Component {
  render() {
    return (
      <>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='page-title-box'>
              <div className='float-right'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href=''>Crovex</a>
                  </li>
                  <li className='breadcrumb-item'>
                    <a href=''>Profile</a>
                  </li>
                  <li className='breadcrumb-item active'>Inbox</li>
                </ol>
              </div>
              <h4 className='page-title'>Inbox</h4>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='email-leftbar'>
              <button
                type='button'
                className='btn btn-gradient-danger btn-round btn-custom btn-block waves-effect waves-light'
                data-toggle='modal'
                data-animation='bounce'
                data-target='.compose-modal'
              >
                <i className='fas fa-feather-alt mr-2'></i>Compose
              </button>

              <div className='card mt-3'>
                <div className='card-body'>
                  <div className='mail-list'>
                    <a href='#' className='active pt-0'>
                      Inbox <span className='ml-1'>(5)</span>
                    </a>
                    <a href='#'>Starred</a>
                    <a href='#'>Important</a>
                    <a href='#'>Draft</a>
                    <a href='#'>Sent Mail</a>
                    <a href='#'>Trash</a>
                  </div>

 </div>
              </div>
            </div>
            <div className='email-rightbar'>
              <div className='float-right d-flex justify-content-between'>
                <div className='btn-group ml-1'>
                  <button
                    type='button'
                    className='btn btn-gradient-info waves-light waves-effect dropdown-toggle'
                    data-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i className='fas fa-question-circle'></i>
                  </button>
                  <div className='dropdown-menu dropdown-menu-right'>
                    <a className='dropdown-item' href='#'>
                      Updates
                    </a>
                    <a className='dropdown-item' href='#'>
                      Social
                    </a>
                    <a className='dropdown-item' href='#'>
                      Team Manage
                    </a>
                  </div>
                </div>
                <div className='btn-group ml-1'>
                  <button
                    type='button'
                    className='btn btn-gradient-info waves-light waves-effect dropdown-toggle'
                    data-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i className='fas fa-cog'></i>
                  </button>
                  <div className='dropdown-menu dropdown-menu-right'>
                    <a className='dropdown-item' href='#'>
                      Display density
                    </a>
                    <a className='dropdown-item' href='#'>
                      Themes
                    </a>
                    <a className='dropdown-item' href='#'>
                      Help
                    </a>
                  </div>
                </div>
              </div>
              <div className='btn-toolbar' role='toolbar'>
                <div className='btn-group'>
                  <button
                    type='button'
                    className='btn btn-gradient-info waves-light waves-effect'
                  >
                    <i className='fas fa-inbox'></i>
                  </button>
                  <button
                    type='button'
                    className='btn btn-gradient-info waves-light waves-effect'
                  >
                    <i className='fas fa-exclamation-circle'></i>
                  </button>
                  <button
                    type='button'
                    className='btn btn-gradient-info waves-light waves-effect'
                  >
                    <i className='fas fa-trash'></i>
                  </button>
                </div>
                <div className='btn-group ml-1'>
                  <button
                    type='button'
                    className='btn btn-gradient-info waves-light waves-effect dropdown-toggle'
                    data-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i className='fas fa-folder'></i>
                    <i className='mdi mdi-chevron-down ml-1'></i>
                  </button>
                  <div className='dropdown-menu'>
                    <a className='dropdown-item' href='#'>
                      Updates
                    </a>
                    <a className='dropdown-item' href='#'>
                      Social
                    </a>
                    <a className='dropdown-item' href='#'>
                      Team Manage
                    </a>
                  </div>
                </div>
                <div className='btn-group ml-1'>
                  <button
                    type='button'
                    className='btn btn-gradient-info waves-light waves-effect dropdown-toggle'
                    data-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i className='fas fa-tag'></i>
                    <i className='mdi mdi-chevron-down ml-1'></i>
                  </button>
                  <div className='dropdown-menu'>
                    <a className='dropdown-item' href='#'>
                      Updates
                    </a>
                    <a className='dropdown-item' href='#'>
                      Social
                    </a>
                    <a className='dropdown-item' href='#'>
                      Team Manage
                    </a>
                  </div>
                </div>

                <div className='btn-group ml-1'>
                  <button
                    type='button'
                    className='btn btn-gradient-info waves-light waves-effect dropdown-toggle'
                    data-toggle='dropdown'
                    aria-expanded='false'
                  >
                    More<i className='mdi mdi-chevron-down ml-1'></i>
                  </button>
                  <div className='dropdown-menu'>
                    <a className='dropdown-item' href='#'>
                      Mark as Unread
                    </a>
                    <a className='dropdown-item' href='#'>
                      Mark as Important
                    </a>
                    <a className='dropdown-item' href='#'>
                      Add to Tasks
                    </a>
                    <a className='dropdown-item' href='#'>
                      Add Star
                    </a>
                    <a className='dropdown-item' href='#'>
                      Mute
                    </a>
                  </div>
                </div>
              </div>

              <div className='card my-3'>
                <ul className='message-list'>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk19' />
                        <label for='chk19' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Peter, me (3)</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        Hello &nbsp;–&nbsp;{' '}
                        <span className='teaser'>
                          Trip home from 🎉 Colombo has been arranged, then
                          Jenna will come get me from Stockholm. :)
                        </span>
                      </a>
                      <div className='date'>Mar. 6</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk20' />
                        <label for='chk20' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>me, Susanna (7)</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        <span className='badge-soft-warning badge mr-2'>
                          Freelance
                        </span>
                        Since you asked... and i'm inconceivably bored at the
                        train station &nbsp;–&nbsp;
                        <span className='teaser'>
                          Alright thanks. I'll have to re-book that somehow,
                          i'll get back to you.
                        </span>
                      </a>
                      <div className='date'>Mar. 6</div>
                    </div>
                  </li>

                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk6' />
                        <label for='chk6' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Web Support Dennis</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        Re: New mail settings &nbsp;–&nbsp;
                        <span className='teaser'>
                          Will you answer him asap?
                        </span>
                      </a>
                      <div className='date'>Mar 7</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk7' />
                        <label for='chk7' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>me, Peter (2)</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        <span className='badge-soft-info badge mr-2'>
                          Support
                        </span>
                        Off on Thursday &nbsp;–&nbsp;
                        <span className='teaser'>
                          Eff that place, you might as well stay here with us
                          instead! Sent from my iPhone 4 &gt; 4 mar 2014 at 5:55
                          pm
                        </span>
                      </a>
                      <div className='date'>Mar 4</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk8' />
                        <label for='chk8' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Medium</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        <span className='badge-soft-purple badge mr-2'>
                          Social
                        </span>
                        This Week's Top Stories &nbsp;–&nbsp;
                        <span className='teaser'>
                          Our top pick for you on Medium this week The Man Who
                          Destroyed America’s Ego
                        </span>
                      </a>
                      <div className='date'>Feb 28</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk9' />
                        <label for='chk9' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Death to Stock</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        🎁 Montly High-Res Photos &nbsp;–&nbsp;
                        <span className='teaser'>
                          To create this month's pack, we hosted a party with
                          local musician Jared Mahone here in Columbus, Ohio.
                        </span>
                      </a>
                      <div className='date'>Feb 28</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' checked id='chk3' />
                        <label for='chk3' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Randy, me (5)</p>
                        <span className='star-toggle fas fa-star text-warning'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        <span className='badge-soft-success badge mr-2'>
                          Family
                        </span>
                        Last pic over my village &nbsp;–&nbsp;
                        <span className='teaser'>
                          Yeah i'd like that! Do you remember the video you
                          showed me of your train ride between Colombo and
                          Kandy? The one with the mountain view? I would love to
                          see that one again!
                        </span>
                      </a>
                      <div className='date'>5:01 am</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk4' />
                        <label for='chk4' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Andrew Zimmer</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        Mochila Beta: Subscription Confirmed &nbsp;–&nbsp;{' '}
                        <span className='teaser'>
                          You've been confirmed! Welcome to the ruling class of
                          the inbox. For your records, here is a copy of the
                          information you submitted to us...
                        </span>
                      </a>
                      <div className='date'>Mar 8</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk5' />
                        <label for='chk5' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Infinity HR</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        Sveriges Hetaste sommarjobb &nbsp;–&nbsp; 👌
                        <span className='teaser'>
                          Hej Nicklas Sandell! Vi vill bjuda in dig till "First
                          tour 2014", ett rekryteringsevent som erbjuder jobb på
                          16 semesterorter iSverige.
                        </span>
                      </a>
                      <div className='date'>Mar 8</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk10' />
                        <label for='chk10' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Revibe</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        <span className='badge-soft-pink badge mr-2'>
                          Friends
                        </span>
                        Weekend on Revibe &nbsp;–&nbsp;
                        <span className='teaser'>
                          Today's Friday and we thought maybe you want some
                          music inspiration for the weekend. Here are some
                          trending tracks and playlists we think you should give
                          a listen!
                        </span>
                      </a>
                      <div className='date'>Feb 27</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk11' />
                        <label for='chk11' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Erik, me (5)</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        Regarding our meeting &nbsp;–&nbsp;
                        <span className='teaser'>
                          That's great, see you on Thursday!
                        </span>
                      </a>
                      <div className='date'>Feb 24</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk12' />
                        <label for='chk12' className='toggle' />
                      </div>
                      <a href=''>
                        <p className='title'>KanbanFlow</p>
                        <span className='star-toggle far fa-star' />
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        <span className='badge-soft-purple badge mr-2'>
                          Social
                        </span>
                        Task assigned: Clone ARP's website &nbsp;–&nbsp;{' '}
                        <span className='teaser'>
                          You have been assigned 💥 a task by Alex@Work on the
                          board Web.
                        </span>
                      </a>
                      <div className='date'>Feb 24</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk13' />
                        <label for='chk13' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Tobias Berggren</p>
                        <span className='star-toggle far fa-star' />
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        Let's go fishing! &nbsp;–&nbsp;
                        <span className='teaser'>
                          Hey, You wanna join me and Fred at the lake tomorrow?
                          It'll be awesome.
                        </span>
                      </a>
                      <div className='date'>Feb 23</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk14' />
                        <label for='chk14' className='toggle' />
                      </div>
                      <a href=''>
                        <p className='title'>Charukaw, me (7)</p>
                        <span className='star-toggle far fa-star' />
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        Hey man &nbsp;–&nbsp;{' '}
                        <span className='teaser'>
                          Nah man sorry i don't. Should i get it?
                        </span>
                      </a>
                      <div className='date'>Feb 23</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' checked='checked' id='chk15' />
                        <label htmlFor='chk15' className='toggle' />
                      </div>
                      <a href=''>
                        <p className='title'>me, Peter (5)</p>
                        <span className='star-toggle fas fa-star text-warning'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        <span className='badge-soft-info badge mr-2'>
                          Support
                        </span>
                        Home again! &nbsp;–&nbsp;{' '}
                        <span className='teaser'>
                          That's just perfect! See you tomorrow.
                        </span>
                      </a>
                      <div className='date'>Feb 21</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk16' />
                        <label for='chk16' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Stack Exchange</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        1 new items in your Stackexchange inbox &nbsp;–&nbsp;{' '}
                        <span className='teaser'>
                          The following items were added to your Stack Exchange
                          global inbox since you last checked it.
                        </span>
                      </a>
                      <div className='date'>Feb 21</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk17' />
                        <label for='chk17' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>Google Drive Team</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        You can now use your storage in Google Drive
                        &nbsp;–&nbsp;{' '}
                        <span className='teaser'>
                          Hey Nicklas Sandell! Thank you for purchasing extra
                          storage space in Google Drive.
                        </span>
                      </a>
                      <div className='date'>Feb 20</div>
                    </div>
                  </li>
                  <li>
                    <div className='col-mail col-mail-1'>
                      <div className='checkbox-wrapper-mail'>
                        <input type='checkbox' id='chk18' />
                        <label for='chk18' className='toggle'></label>
                      </div>
                      <a href=''>
                        <p className='title'>me, Susanna (11)</p>
                        <span className='star-toggle far fa-star'></span>
                      </a>
                    </div>
                    <div className='col-mail col-mail-2'>
                      <a href='' className='subject'>
                        Train/Bus &nbsp;–&nbsp;{' '}
                        <span className='teaser'>
                          Yes ok, great! I'm not stuck in Stockholm anymore,
                          we're making progress.<span></span>🏏
                        </span>
                      </a>
                      <div className='date'>Feb 19</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='row mb-3'>
                <div className='col-7 align-self-center'>
                  Showing 1 - 20 of 1,524
                </div>
                <div className='col-5'>
                  <div className='btn-group float-right'>
                    <button
                      type='button'
                      className='btn btn-sm btn-gradient-primary waves-effect mb-0'
                    >
                      <i className='fa fa-chevron-left'></i>
                    </button>
                    <button
                      type='button'
                      className='btn btn-sm btn-gradient-primary waves-effect mb-0'
                    >
                      <i className='fa fa-chevron-right'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
