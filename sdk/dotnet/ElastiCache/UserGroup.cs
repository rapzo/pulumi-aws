// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElastiCache
{
    /// <summary>
    /// Provides an ElastiCache user group resource.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Aws = Pulumi.Aws;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var testUser = new Aws.ElastiCache.User("testUser", new Aws.ElastiCache.UserArgs
    ///         {
    ///             UserId = "testUserId",
    ///             UserName = "default",
    ///             AccessString = "on ~app::* -@all +@read +@hash +@bitmap +@geo -setbit -bitfield -hset -hsetnx -hmset -hincrby -hincrbyfloat -hdel -bitop -geoadd -georadius -georadiusbymember",
    ///             Engine = "REDIS",
    ///             Passwords = 
    ///             {
    ///                 "password123456789",
    ///             },
    ///         });
    ///         var testUserGroup = new Aws.ElastiCache.UserGroup("testUserGroup", new Aws.ElastiCache.UserGroupArgs
    ///         {
    ///             Engine = "REDIS",
    ///             UserGroupId = "userGroupId",
    ///             UserIds = 
    ///             {
    ///                 testUser.UserId,
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// 
    /// ## Import
    /// 
    /// ElastiCache user groups can be imported using the `user_group_id`, e.g.
    /// 
    /// ```sh
    ///  $ pulumi import aws:elasticache/userGroup:UserGroup my_user_group userGoupId1
    /// ```
    /// </summary>
    [AwsResourceType("aws:elasticache/userGroup:UserGroup")]
    public partial class UserGroup : Pulumi.CustomResource
    {
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// The current supported value is `REDIS`.
        /// </summary>
        [Output("engine")]
        public Output<string> Engine { get; private set; } = null!;

        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        [Output("tagsAll")]
        public Output<ImmutableDictionary<string, string>> TagsAll { get; private set; } = null!;

        /// <summary>
        /// The ID of the user group.
        /// </summary>
        [Output("userGroupId")]
        public Output<string> UserGroupId { get; private set; } = null!;

        /// <summary>
        /// The list of user IDs that belong to the user group.
        /// </summary>
        [Output("userIds")]
        public Output<ImmutableArray<string>> UserIds { get; private set; } = null!;


        /// <summary>
        /// Create a UserGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public UserGroup(string name, UserGroupArgs args, CustomResourceOptions? options = null)
            : base("aws:elasticache/userGroup:UserGroup", name, args ?? new UserGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private UserGroup(string name, Input<string> id, UserGroupState? state = null, CustomResourceOptions? options = null)
            : base("aws:elasticache/userGroup:UserGroup", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing UserGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static UserGroup Get(string name, Input<string> id, UserGroupState? state = null, CustomResourceOptions? options = null)
        {
            return new UserGroup(name, id, state, options);
        }
    }

    public sealed class UserGroupArgs : Pulumi.ResourceArgs
    {
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// The current supported value is `REDIS`.
        /// </summary>
        [Input("engine", required: true)]
        public Input<string> Engine { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The ID of the user group.
        /// </summary>
        [Input("userGroupId", required: true)]
        public Input<string> UserGroupId { get; set; } = null!;

        [Input("userIds")]
        private InputList<string>? _userIds;

        /// <summary>
        /// The list of user IDs that belong to the user group.
        /// </summary>
        public InputList<string> UserIds
        {
            get => _userIds ?? (_userIds = new InputList<string>());
            set => _userIds = value;
        }

        public UserGroupArgs()
        {
        }
    }

    public sealed class UserGroupState : Pulumi.ResourceArgs
    {
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// The current supported value is `REDIS`.
        /// </summary>
        [Input("engine")]
        public Input<string>? Engine { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        [Input("tagsAll")]
        private InputMap<string>? _tagsAll;
        public InputMap<string> TagsAll
        {
            get => _tagsAll ?? (_tagsAll = new InputMap<string>());
            set => _tagsAll = value;
        }

        /// <summary>
        /// The ID of the user group.
        /// </summary>
        [Input("userGroupId")]
        public Input<string>? UserGroupId { get; set; }

        [Input("userIds")]
        private InputList<string>? _userIds;

        /// <summary>
        /// The list of user IDs that belong to the user group.
        /// </summary>
        public InputList<string> UserIds
        {
            get => _userIds ?? (_userIds = new InputList<string>());
            set => _userIds = value;
        }

        public UserGroupState()
        {
        }
    }
}
