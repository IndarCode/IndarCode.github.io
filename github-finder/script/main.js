$(document).ready(function(){
	$('#searchUser').on('keyup', function(e){
		let username = e.target.value;
		$('section').css({'padding-top': '3%', 'padding-bottom': '3%'});
		$.ajax({
			url: 'https://api.github.com/users/'+username,
			data: {
				client_id: '859082cff64cafacbe8c',
				client_secret: '54af920f0535febd3bbabbf0f10ceb69e61c008a'
			}
		}).done(function(user){

			$.ajax({
				url:'https://api.github.com/users/'+username+'/repos',
				data:{
					client_id: '859082cff64cafacbe8c',
					client_secret: '54af920f0535febd3bbabbf0f10ceb69e61c008a',
					sort: 'created_at: asc',
					per_page: 5
				}
			}).done(function(repos){
				

					$.each(repos, function(index, repo){
						$('#repos').append(`
								<li>
							        <div class="repo-name">
							          <h3>${repo.name} - <span>${repo.description}</span></h3>
							          <p><span>Language :</span> ${repo.language}</p>
							        </div>
							        <div class="repo-info">
							          <span class="pink">Forks Count ${repo.forks_count}</span>
							          <span class="grey">Watchers Count ${repo.watchers_count}</span>
							          <span class="blue-2">Issues ${repo.open_issues_count}</span>
							        </div>
							        <div class="repo-link">
							          <a href="${repo.html_url}" target="_blank">Repo Page</a>
							        </div>
						      	</li>
							`);
				});






			});

			$('#profile').html(`
					<h2>${user.name}</h2>
				  <div class="info-holder">
				    <div class="avatar">
				      <img src="${user.avatar_url}" alt="${user.login}" />
				      <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
				    </div>

				    <div class="info">
				      <ul class="sub-info">
				        <li class="pink">Public Repos ${user.public_repos}</li>
				        <li class="blue">Public Gists ${user.public_gists}</li>
				        <li class="grey">Followers ${user.followers}</li>
				        <li class="blue-2">Following ${user.following}</li>
				      </ul>

				      <ul class="main-info">
				        <li><span>Company :</span> ${user.company} </li>
				        <li><span>Location :</span> ${user.location}</li>
				        <li><span>Website :</span> <a href="${user.blog}" target="_blank">${user.blog} </a></li>
				        <li><span>Member since :</span> ${user.created_at} </li>
				      </ul>
				    </div>
				  </div>
				`);

			$('.fourth').html(`
					<h2>Latest Repos</h2>
  <div class="repos-link-holder">

    <ul id="repos">
      
    </ul>
  </div>
				`);
		});
	});
});