// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Glue.Outputs
{

    [OutputType]
    public sealed class CrawlerS3Target
    {
        /// <summary>
        /// The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.
        /// </summary>
        public readonly string? ConnectionName;
        /// <summary>
        /// A list of glob patterns used to exclude from the crawl.
        /// </summary>
        public readonly ImmutableArray<string> Exclusions;
        /// <summary>
        /// The path of the Amazon DocumentDB or MongoDB target (database/collection).
        /// </summary>
        public readonly string Path;
        /// <summary>
        /// Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.
        /// </summary>
        public readonly int? SampleSize;

        [OutputConstructor]
        private CrawlerS3Target(
            string? connectionName,

            ImmutableArray<string> exclusions,

            string path,

            int? sampleSize)
        {
            ConnectionName = connectionName;
            Exclusions = exclusions;
            Path = path;
            SampleSize = sampleSize;
        }
    }
}
