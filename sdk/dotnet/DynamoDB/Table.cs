// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.DynamoDB
{
    /// <summary>
    /// Provides a DynamoDB table resource
    /// 
    /// &gt; **Note:** It is recommended to use [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) for `read_capacity` and/or `write_capacity` if there's `autoscaling policy` attached to the table.
    /// 
    /// ## Example Usage
    /// 
    /// The following dynamodb table description models the table and GSI shown
    /// in the [AWS SDK example documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html)
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Aws = Pulumi.Aws;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var basic_dynamodb_table = new Aws.DynamoDB.Table("basic-dynamodb-table", new Aws.DynamoDB.TableArgs
    ///         {
    ///             Attributes = 
    ///             {
    ///                 new Aws.DynamoDB.Inputs.TableAttributeArgs
    ///                 {
    ///                     Name = "UserId",
    ///                     Type = "S",
    ///                 },
    ///                 new Aws.DynamoDB.Inputs.TableAttributeArgs
    ///                 {
    ///                     Name = "GameTitle",
    ///                     Type = "S",
    ///                 },
    ///                 new Aws.DynamoDB.Inputs.TableAttributeArgs
    ///                 {
    ///                     Name = "TopScore",
    ///                     Type = "N",
    ///                 },
    ///             },
    ///             BillingMode = "PROVISIONED",
    ///             GlobalSecondaryIndexes = 
    ///             {
    ///                 new Aws.DynamoDB.Inputs.TableGlobalSecondaryIndexArgs
    ///                 {
    ///                     HashKey = "GameTitle",
    ///                     Name = "GameTitleIndex",
    ///                     NonKeyAttributes = 
    ///                     {
    ///                         "UserId",
    ///                     },
    ///                     ProjectionType = "INCLUDE",
    ///                     RangeKey = "TopScore",
    ///                     ReadCapacity = 10,
    ///                     WriteCapacity = 10,
    ///                 },
    ///             },
    ///             HashKey = "UserId",
    ///             RangeKey = "GameTitle",
    ///             ReadCapacity = 20,
    ///             Tags = 
    ///             {
    ///                 { "Environment", "production" },
    ///                 { "Name", "dynamodb-table-1" },
    ///             },
    ///             Ttl = new Aws.DynamoDB.Inputs.TableTtlArgs
    ///             {
    ///                 AttributeName = "TimeToExist",
    ///                 Enabled = false,
    ///             },
    ///             WriteCapacity = 20,
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// ### Global Tables
    /// 
    /// This resource implements support for [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) via `replica` configuration blocks. For working with [DynamoDB Global Tables V1 (version 2017.11.29)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html), see the `aws.dynamodb.GlobalTable` resource.
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Aws = Pulumi.Aws;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var example = new Aws.DynamoDB.Table("example", new Aws.DynamoDB.TableArgs
    ///         {
    ///             Attributes = 
    ///             {
    ///                 new Aws.DynamoDB.Inputs.TableAttributeArgs
    ///                 {
    ///                     Name = "TestTableHashKey",
    ///                     Type = "S",
    ///                 },
    ///             },
    ///             BillingMode = "PAY_PER_REQUEST",
    ///             HashKey = "TestTableHashKey",
    ///             Replicas = 
    ///             {
    ///                 new Aws.DynamoDB.Inputs.TableReplicaArgs
    ///                 {
    ///                     RegionName = "us-east-2",
    ///                 },
    ///                 new Aws.DynamoDB.Inputs.TableReplicaArgs
    ///                 {
    ///                     RegionName = "us-west-2",
    ///                 },
    ///             },
    ///             StreamEnabled = true,
    ///             StreamViewType = "NEW_AND_OLD_IMAGES",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// 
    /// ## Import
    /// 
    /// DynamoDB tables can be imported using the `name`, e.g.
    /// 
    /// ```sh
    ///  $ pulumi import aws:dynamodb/table:Table basic-dynamodb-table GameScores
    /// ```
    /// </summary>
    [AwsResourceType("aws:dynamodb/table:Table")]
    public partial class Table : Pulumi.CustomResource
    {
        /// <summary>
        /// The arn of the table
        /// </summary>
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// List of nested attribute definitions. Only required for `hash_key` and `range_key` attributes. Each attribute has two properties:
        /// </summary>
        [Output("attributes")]
        public Output<ImmutableArray<Outputs.TableAttribute>> Attributes { get; private set; } = null!;

        /// <summary>
        /// Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`.
        /// </summary>
        [Output("billingMode")]
        public Output<string?> BillingMode { get; private set; } = null!;

        /// <summary>
        /// Describe a GSI for the table;
        /// subject to the normal limits on the number of GSIs, projected
        /// attributes, etc.
        /// </summary>
        [Output("globalSecondaryIndexes")]
        public Output<ImmutableArray<Outputs.TableGlobalSecondaryIndex>> GlobalSecondaryIndexes { get; private set; } = null!;

        /// <summary>
        /// The name of the hash key in the index; must be
        /// defined as an attribute in the resource.
        /// </summary>
        [Output("hashKey")]
        public Output<string> HashKey { get; private set; } = null!;

        /// <summary>
        /// Describe an LSI on the table;
        /// these can only be allocated *at creation* so you cannot change this
        /// definition after you have created the resource.
        /// </summary>
        [Output("localSecondaryIndexes")]
        public Output<ImmutableArray<Outputs.TableLocalSecondaryIndex>> LocalSecondaryIndexes { get; private set; } = null!;

        /// <summary>
        /// The name of the index
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Point-in-time recovery options.
        /// </summary>
        [Output("pointInTimeRecovery")]
        public Output<Outputs.TablePointInTimeRecovery> PointInTimeRecovery { get; private set; } = null!;

        /// <summary>
        /// The name of the range key; must be defined
        /// </summary>
        [Output("rangeKey")]
        public Output<string?> RangeKey { get; private set; } = null!;

        /// <summary>
        /// The number of read units for this index. Must be set if billing_mode is set to PROVISIONED.
        /// </summary>
        [Output("readCapacity")]
        public Output<int?> ReadCapacity { get; private set; } = null!;

        /// <summary>
        /// Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. Detailed below.
        /// </summary>
        [Output("replicas")]
        public Output<ImmutableArray<Outputs.TableReplica>> Replicas { get; private set; } = null!;

        /// <summary>
        /// Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS owned Customer Master Key if this argument isn't specified.
        /// </summary>
        [Output("serverSideEncryption")]
        public Output<Outputs.TableServerSideEncryption> ServerSideEncryption { get; private set; } = null!;

        /// <summary>
        /// The ARN of the Table Stream. Only available when `stream_enabled = true`
        /// </summary>
        [Output("streamArn")]
        public Output<string> StreamArn { get; private set; } = null!;

        /// <summary>
        /// Indicates whether Streams are to be enabled (true) or disabled (false).
        /// </summary>
        [Output("streamEnabled")]
        public Output<bool?> StreamEnabled { get; private set; } = null!;

        /// <summary>
        /// A timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not
        /// a unique identifier for the stream on its own. However, the combination of AWS customer ID,
        /// table name and this field is guaranteed to be unique.
        /// It can be used for creating CloudWatch Alarms. Only available when `stream_enabled = true`
        /// </summary>
        [Output("streamLabel")]
        public Output<string> StreamLabel { get; private set; } = null!;

        /// <summary>
        /// When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
        /// </summary>
        [Output("streamViewType")]
        public Output<string> StreamViewType { get; private set; } = null!;

        /// <summary>
        /// A map of tags to populate on the created table. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// A map of tags assigned to the resource, including those inherited from the provider .
        /// </summary>
        [Output("tagsAll")]
        public Output<ImmutableDictionary<string, string>> TagsAll { get; private set; } = null!;

        /// <summary>
        /// Defines ttl, has two properties, and can only be specified once:
        /// </summary>
        [Output("ttl")]
        public Output<Outputs.TableTtl?> Ttl { get; private set; } = null!;

        /// <summary>
        /// The number of write units for this index. Must be set if billing_mode is set to PROVISIONED.
        /// </summary>
        [Output("writeCapacity")]
        public Output<int?> WriteCapacity { get; private set; } = null!;


        /// <summary>
        /// Create a Table resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Table(string name, TableArgs args, CustomResourceOptions? options = null)
            : base("aws:dynamodb/table:Table", name, args ?? new TableArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Table(string name, Input<string> id, TableState? state = null, CustomResourceOptions? options = null)
            : base("aws:dynamodb/table:Table", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Table resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Table Get(string name, Input<string> id, TableState? state = null, CustomResourceOptions? options = null)
        {
            return new Table(name, id, state, options);
        }
    }

    public sealed class TableArgs : Pulumi.ResourceArgs
    {
        [Input("attributes", required: true)]
        private InputList<Inputs.TableAttributeArgs>? _attributes;

        /// <summary>
        /// List of nested attribute definitions. Only required for `hash_key` and `range_key` attributes. Each attribute has two properties:
        /// </summary>
        public InputList<Inputs.TableAttributeArgs> Attributes
        {
            get => _attributes ?? (_attributes = new InputList<Inputs.TableAttributeArgs>());
            set => _attributes = value;
        }

        /// <summary>
        /// Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`.
        /// </summary>
        [Input("billingMode")]
        public Input<string>? BillingMode { get; set; }

        [Input("globalSecondaryIndexes")]
        private InputList<Inputs.TableGlobalSecondaryIndexArgs>? _globalSecondaryIndexes;

        /// <summary>
        /// Describe a GSI for the table;
        /// subject to the normal limits on the number of GSIs, projected
        /// attributes, etc.
        /// </summary>
        public InputList<Inputs.TableGlobalSecondaryIndexArgs> GlobalSecondaryIndexes
        {
            get => _globalSecondaryIndexes ?? (_globalSecondaryIndexes = new InputList<Inputs.TableGlobalSecondaryIndexArgs>());
            set => _globalSecondaryIndexes = value;
        }

        /// <summary>
        /// The name of the hash key in the index; must be
        /// defined as an attribute in the resource.
        /// </summary>
        [Input("hashKey", required: true)]
        public Input<string> HashKey { get; set; } = null!;

        [Input("localSecondaryIndexes")]
        private InputList<Inputs.TableLocalSecondaryIndexArgs>? _localSecondaryIndexes;

        /// <summary>
        /// Describe an LSI on the table;
        /// these can only be allocated *at creation* so you cannot change this
        /// definition after you have created the resource.
        /// </summary>
        public InputList<Inputs.TableLocalSecondaryIndexArgs> LocalSecondaryIndexes
        {
            get => _localSecondaryIndexes ?? (_localSecondaryIndexes = new InputList<Inputs.TableLocalSecondaryIndexArgs>());
            set => _localSecondaryIndexes = value;
        }

        /// <summary>
        /// The name of the index
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Point-in-time recovery options.
        /// </summary>
        [Input("pointInTimeRecovery")]
        public Input<Inputs.TablePointInTimeRecoveryArgs>? PointInTimeRecovery { get; set; }

        /// <summary>
        /// The name of the range key; must be defined
        /// </summary>
        [Input("rangeKey")]
        public Input<string>? RangeKey { get; set; }

        /// <summary>
        /// The number of read units for this index. Must be set if billing_mode is set to PROVISIONED.
        /// </summary>
        [Input("readCapacity")]
        public Input<int>? ReadCapacity { get; set; }

        [Input("replicas")]
        private InputList<Inputs.TableReplicaArgs>? _replicas;

        /// <summary>
        /// Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. Detailed below.
        /// </summary>
        public InputList<Inputs.TableReplicaArgs> Replicas
        {
            get => _replicas ?? (_replicas = new InputList<Inputs.TableReplicaArgs>());
            set => _replicas = value;
        }

        /// <summary>
        /// Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS owned Customer Master Key if this argument isn't specified.
        /// </summary>
        [Input("serverSideEncryption")]
        public Input<Inputs.TableServerSideEncryptionArgs>? ServerSideEncryption { get; set; }

        /// <summary>
        /// Indicates whether Streams are to be enabled (true) or disabled (false).
        /// </summary>
        [Input("streamEnabled")]
        public Input<bool>? StreamEnabled { get; set; }

        /// <summary>
        /// When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
        /// </summary>
        [Input("streamViewType")]
        public Input<string>? StreamViewType { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A map of tags to populate on the created table. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Defines ttl, has two properties, and can only be specified once:
        /// </summary>
        [Input("ttl")]
        public Input<Inputs.TableTtlArgs>? Ttl { get; set; }

        /// <summary>
        /// The number of write units for this index. Must be set if billing_mode is set to PROVISIONED.
        /// </summary>
        [Input("writeCapacity")]
        public Input<int>? WriteCapacity { get; set; }

        public TableArgs()
        {
        }
    }

    public sealed class TableState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The arn of the table
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        [Input("attributes")]
        private InputList<Inputs.TableAttributeGetArgs>? _attributes;

        /// <summary>
        /// List of nested attribute definitions. Only required for `hash_key` and `range_key` attributes. Each attribute has two properties:
        /// </summary>
        public InputList<Inputs.TableAttributeGetArgs> Attributes
        {
            get => _attributes ?? (_attributes = new InputList<Inputs.TableAttributeGetArgs>());
            set => _attributes = value;
        }

        /// <summary>
        /// Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`.
        /// </summary>
        [Input("billingMode")]
        public Input<string>? BillingMode { get; set; }

        [Input("globalSecondaryIndexes")]
        private InputList<Inputs.TableGlobalSecondaryIndexGetArgs>? _globalSecondaryIndexes;

        /// <summary>
        /// Describe a GSI for the table;
        /// subject to the normal limits on the number of GSIs, projected
        /// attributes, etc.
        /// </summary>
        public InputList<Inputs.TableGlobalSecondaryIndexGetArgs> GlobalSecondaryIndexes
        {
            get => _globalSecondaryIndexes ?? (_globalSecondaryIndexes = new InputList<Inputs.TableGlobalSecondaryIndexGetArgs>());
            set => _globalSecondaryIndexes = value;
        }

        /// <summary>
        /// The name of the hash key in the index; must be
        /// defined as an attribute in the resource.
        /// </summary>
        [Input("hashKey")]
        public Input<string>? HashKey { get; set; }

        [Input("localSecondaryIndexes")]
        private InputList<Inputs.TableLocalSecondaryIndexGetArgs>? _localSecondaryIndexes;

        /// <summary>
        /// Describe an LSI on the table;
        /// these can only be allocated *at creation* so you cannot change this
        /// definition after you have created the resource.
        /// </summary>
        public InputList<Inputs.TableLocalSecondaryIndexGetArgs> LocalSecondaryIndexes
        {
            get => _localSecondaryIndexes ?? (_localSecondaryIndexes = new InputList<Inputs.TableLocalSecondaryIndexGetArgs>());
            set => _localSecondaryIndexes = value;
        }

        /// <summary>
        /// The name of the index
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Point-in-time recovery options.
        /// </summary>
        [Input("pointInTimeRecovery")]
        public Input<Inputs.TablePointInTimeRecoveryGetArgs>? PointInTimeRecovery { get; set; }

        /// <summary>
        /// The name of the range key; must be defined
        /// </summary>
        [Input("rangeKey")]
        public Input<string>? RangeKey { get; set; }

        /// <summary>
        /// The number of read units for this index. Must be set if billing_mode is set to PROVISIONED.
        /// </summary>
        [Input("readCapacity")]
        public Input<int>? ReadCapacity { get; set; }

        [Input("replicas")]
        private InputList<Inputs.TableReplicaGetArgs>? _replicas;

        /// <summary>
        /// Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. Detailed below.
        /// </summary>
        public InputList<Inputs.TableReplicaGetArgs> Replicas
        {
            get => _replicas ?? (_replicas = new InputList<Inputs.TableReplicaGetArgs>());
            set => _replicas = value;
        }

        /// <summary>
        /// Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS owned Customer Master Key if this argument isn't specified.
        /// </summary>
        [Input("serverSideEncryption")]
        public Input<Inputs.TableServerSideEncryptionGetArgs>? ServerSideEncryption { get; set; }

        /// <summary>
        /// The ARN of the Table Stream. Only available when `stream_enabled = true`
        /// </summary>
        [Input("streamArn")]
        public Input<string>? StreamArn { get; set; }

        /// <summary>
        /// Indicates whether Streams are to be enabled (true) or disabled (false).
        /// </summary>
        [Input("streamEnabled")]
        public Input<bool>? StreamEnabled { get; set; }

        /// <summary>
        /// A timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not
        /// a unique identifier for the stream on its own. However, the combination of AWS customer ID,
        /// table name and this field is guaranteed to be unique.
        /// It can be used for creating CloudWatch Alarms. Only available when `stream_enabled = true`
        /// </summary>
        [Input("streamLabel")]
        public Input<string>? StreamLabel { get; set; }

        /// <summary>
        /// When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
        /// </summary>
        [Input("streamViewType")]
        public Input<string>? StreamViewType { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A map of tags to populate on the created table. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        [Input("tagsAll")]
        private InputMap<string>? _tagsAll;

        /// <summary>
        /// A map of tags assigned to the resource, including those inherited from the provider .
        /// </summary>
        public InputMap<string> TagsAll
        {
            get => _tagsAll ?? (_tagsAll = new InputMap<string>());
            set => _tagsAll = value;
        }

        /// <summary>
        /// Defines ttl, has two properties, and can only be specified once:
        /// </summary>
        [Input("ttl")]
        public Input<Inputs.TableTtlGetArgs>? Ttl { get; set; }

        /// <summary>
        /// The number of write units for this index. Must be set if billing_mode is set to PROVISIONED.
        /// </summary>
        [Input("writeCapacity")]
        public Input<int>? WriteCapacity { get; set; }

        public TableState()
        {
        }
    }
}
